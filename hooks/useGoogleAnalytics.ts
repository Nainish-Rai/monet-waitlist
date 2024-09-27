import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params: { event_category: string; event_label?: string; value?: number }
    ) => void
  }
}

export const useGoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window.gtag !== 'function') {
      console.warn('Google Analytics not loaded')
    }
  }, [])

  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackSignUp = () => {
    trackEvent('sign_up', 'Waitlist', 'Form Submission')
  }

  const trackConversion = (referralSource: string) => {
    trackEvent('conversion', 'Waitlist', referralSource)
  }

  const trackEngagement = (action: 'open' | 'click', emailType: string) => {
    trackEvent('engagement', 'Email', `${action}_${emailType}`)
  }

  const trackFeedback = (feedback: string) => {
    trackEvent('feedback', 'User Experience', feedback)
  }

  const trackVoucherUtilization = (brand: string) => {
    trackEvent('voucher_utilization', 'Brand', brand)
  }

  return {
    trackSignUp,
    trackConversion,
    trackEngagement,
    trackFeedback,
    trackVoucherUtilization,
  }
}