import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params: { event_category: string; event_label?: string; value?: string }
    ) => void
  }
}

type EVENT_CATEGORY = 'WAITLIST_BRAND' | 'WAITLIST_CUSTOMER' | 'EMAIL' | 'USER_FEEDBACK' | 'VOUCHER_UTILIZATION';

export const useGoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window.gtag !== 'function') {
      console.warn('Google Analytics not loaded')
    }
  }, [])

  const trackEvent = (
    action: string,
    category: EVENT_CATEGORY,
    label?: string,
    value?: string
  ) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackSignUp = (category: EVENT_CATEGORY, userId?: string) => {
    trackEvent('sign_up', category, 'Form Submission', userId)
  }

  const trackConversion = (category: EVENT_CATEGORY, referralSource: string) => {
    trackEvent('conversion', category, referralSource)
  }

  const trackEngagement = (action: 'open' | 'click', emailType: string) => {
    trackEvent('engagement', 'EMAIL', `${action}_${emailType}`)
  }

  const trackFeedback = (feedback: string) => {
    trackEvent('feedback', 'USER_FEEDBACK', feedback)
  }

  const trackVoucherUtilization = (brand: string) => {
    trackEvent('voucher_utilization', 'VOUCHER_UTILIZATION', brand)
  }

  return {
    trackSignUp,
    trackConversion,
    trackEngagement,
    trackFeedback,
    trackVoucherUtilization,
  }
}