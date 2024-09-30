import * as sgMail from "@sendgrid/mail";

export async function sendEmail(name: string, email: string) {
    // console.log(name)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    // const msg = {
    //   to: contactEmail, // Change to your recipient
    //   from: "communications@monet.work", // Change to your verified sender
    //   subject: "This is a simple message",
    //   text: ` Hello, ${name}! This is a simple text message.`,
    //   html: "<strong>and some html</strong>",
    // };
    // try {
    //   await sgMail.send(msg);
    //   console.log("Email sent");
    // } catch (error) {
    //   console.error(error);
    // }

    try {
        const msg = {
            "from": {
                "email": "abhay.mishra@monet.work"
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": email
                        }
                    ],
                    "dynamic_template_data": {
                        "first_name": name
                    }
                }
            ],
            "templateId": "d-0f9b5c4fec6f41bbada68c24df995acb",
            "asm": {
                "groupId": 40581
            }
        };

        await sgMail.send(msg);
        console.log("Customer: Email sent");
    } catch (err) {
        console.log("Failed to send welcome.");
    }
}

export async function sendBrandEmail(name: string, bName: string, email: string) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    // const msg = {
    //   to: contactEmail, // Change to your recipient
    //   from: "communications@monet.work", // Change to your verified sender
    //   subject: "This is a simple message",
    //   text: ` Hello, ${name}! This is a simple text message.`,
    //   html: "<strong>and some html</strong>",
    // };
    // try {
    //   await sgMail.send(msg);
    //   console.log("Email sent");
    // } catch (error) {
    //   console.error(error);
    // }

    try {
        const msg = {
            "from": {
                "email": "abhay.mishra@monet.work"
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": email
                        }
                    ],
                    "dynamic_template_data": {
                        "contact_name": name,
                        "brand_name": bName
                    }
                }
            ],
            "templateId": "d-c82fafe9fb15411ea1e985938e1c9833",
            "asm": {
                "groupId": 40581
            }
        };

        await sgMail.send(msg);
        console.log("Brand: Email sent");
    } catch (err) {
        console.log("Failed to send welcome.");
    }
}
