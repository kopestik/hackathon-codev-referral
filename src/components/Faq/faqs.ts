export const FAQS: FAQ[] = [
    {
        title: "What will happen to my points tagged within CV endorsed? Will they be canceled?",
        content: "No, your points tagged within CV endorsed will still be valid. However, please note that the change to remove the CV endorsed stage will be implemented for referrals received on July 2023 onwards."
    },
    {
        title: "When can I receive my cash incentives for hired referrals?",
        content: "To ensure ease of tracking, your cash incentives for successful referrals will be released based on the pay period cut-offs. The corresponding amounts will be credited to your payroll account, and you will be able to see them reflected in your payslip. Specifically, 50% of the incentive will be credited one month after the referral's full-time start date, and the remaining 50% will be credited after three months of the referral's tenure within the company."
    },{
        title: "Who should I follow up with regarding the progress of my referral?",
        content: "You can send an email to jobs@codev.com or reach out to the representative who acknowledged your referral for updates on the progress of your referral."
    },
    {
        title: "What if there's no active job opening for my referral? Can I still send them?",
        content: "Yes, you can still refer them. We can process their application and add them to our active pool, taking into consideration the bandwidth of the recruitment team."
    },
    {
        title: "Can I refer a previous employee?",
        content: "Yes, you can refer a previous employee. However, they must first clear HR's rehire eligibility check, and if they meet the criteria, we will proceed with the screening process."
    },
    {
        title: "What are the recruitment team's working hours?",
        content: "The recruitment team is available from 6 am to 12 am, Monday to Saturday."
    },
    {
        title: "Where can I check our active job openings?",
        content: "You can visit our website's job listing page at jobs.codev.com to view our current active job openings."
    },
    {
        title: "How can I ensure that I get credit for the referral when multiple referrers send the CV?",
        content: "To ensure you receive credit for the referral, it is important that your referral declares you as the referrer during the screening process. Please remind your referral to mention your name or provide your details when they are being screened or interviewed."
    }
]

type FAQ = {
    title: string;
    content: string;
}