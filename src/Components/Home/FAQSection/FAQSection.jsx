const FAQSection = () => {
    const faqItems = [
        {
            question: 'What types of queries does BB-QueryHub cover?',
            answer: 'BB-QueryHub covers a wide range of product queries and alternatives. You can find information on various product categories and discover recommendations based on user insights.'
        },
        {
            question: 'How can I add a query to BB-QueryHub?',
            answer: 'To add a query, navigate to the "Add Query" section of the site and fill out the required information. Your query will be added to our database for community engagement and recommendations.'
        },
        {
            question: 'Is BB-QueryHub free to use?',
            answer: 'Yes, BB-QueryHub is completely free to use for all users. Enjoy accessing valuable product insights and engaging with the community without any charges.'
        },
        {
            question: 'How can I contact support at BB-QueryHub?',
            answer: 'You can reach our support team via email at support@bb-queryhub.com or through our website contact form. We are here to assist you with any questions or feedback.'
        }
    ];


    return (
        <div className="pt-16 pb-12 px-3">
            <div data-aos="zoom-in" data-aos-duration="800" data-aos-anchor-placement="top-bottom" data-aos-delay="0">
                <h2 className="text-5xl text-center font-bold mb-4">FAQ&apos;s</h2>
                <p className="w-3/4 mx-auto text-center text-sm md:text-lg text-balance mb-10">Have a question about BB-QueryHub? <br /> Browse our frequently asked questions below. <br /> If you need more information, feel free to reach out to us directly.</p>
            </div>

            {/* FAQ Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay={index * 100}
                        className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-200"
                    >
                        <div className="p-4 border-b border-gray-200">
                            <h3 className="text-lg text-gray-900 font-semibold text-blue-600">{item.question}</h3>
                        </div>
                        <div className="p-4">
                            <p className="text-base text-gray-700">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default FAQSection;
