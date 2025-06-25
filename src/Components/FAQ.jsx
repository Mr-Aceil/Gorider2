import React from 'react'
import Faq from './QandAnswer'
import Button from './Button'

export default function FAQ() {
    return (
        <section className='out jcenter icenter bg-backgroundw'>
            <section className='in jcenter text-textsecondary flex-col  gap-4 icenter p-section'>
                <h2 className='text-h2'>FAQ's</h2>
                
                <div className='flex flex-col gap-2 w-full'>
                    <Faq q='What is GoRider?' ans='GoRider is a smart delivery platform that connects individuals, vendors, and riders to manage seamless, multi-vendor deliveries across cities in Nigeria.'/>
                    <Faq q='Is GoRider fully launched?' ans='GoRider is currently in its early launch phase. We are onboarding vendors and delivery agents while finalizing the GoRider app for public release.'/>
                    <Faq q='How does GoRider work for everyday users?' ans='Users can explore different vendors on the app, add items to their cart (even from different stores), and track each delivery independently with real-time updates.'/>
                    <Faq q='Where is GoRider available right now?' ans='We are launching first in Port Harcourt, with plans to expand to Lagos, Abuja, and other cities soon.'/>
                    <Faq q="What is GoRider’s “Multiple Cart system?" ans='With GoRider, users can buy from different stores in one session. Each store’s order is handled and tracked separately—giving you full control and clarity over your deliveries.'/>
                    <Faq q='Can I order with GoRider through WhatsApp?' ans='Yes! For early access users, you can place delivery requests or follow up on orders via WhatsApp. Just send us a message and we’ll assist you instantly. This is especially useful while we roll out the full app.'/>
                    <Faq q='How fast is delivery with GoRider?' ans='Delivery speed depends on the vendor’s preparation time and your location. Most deliveries happen within 1–2 hours inside city limits.'/>
                    <Faq q='How do I track my order?' ans='Each order comes with a live delivery tracker. For multi-store purchases, you’ll receive individual tracking details for each item.'/>
                    <Faq q='How can I become a GoRider vendor?' ans='Simply visit our onboarding page (or use the app when it’s live), submit your business details, and await quick approval. We accept both registered and unregistered small businesses.'/>
                    <Faq q='Do I need CAC to register as a vendor?' ans='No, CAC registration is optional. However, verified businesses get access to additional visibility and trust badges.'/>
                    <Faq q='Is there a subscription fee for vendors?' ans='We offer different vendor plans depending on your business size. Some plans are free during early access. Paid plans unlock more features and insights.'/>
                    <Faq q='How do I join GoRider as a delivery partner?' ans='You can apply through the GoRider app or website by submitting your ID and basic information. Approved riders gain access to daily tasks and earnings visibility.'/>
                    <Faq q='Can I use my own bike?' ans='Yes, riders with personal motorcycles or bicycles are welcome.'/>
                    <Faq q='How do I pay for deliveries?' ans='You can pay using your in-app wallet, bank transfer, or USSD. More options (like card payments) will be added soon.'/>
                    <Faq q='What if there’s an issue with my delivery?' ans=' Use the in-app chat or contact us via WhatsApp or email. Our support team is always available to resolve your concerns quickly.'/>
                </div>

                <Button name='Get More answers' bg='bg-backgroundp' textColor='text-textmain' others='w-fit'/> 
            </section>
        </section>
    )
}
