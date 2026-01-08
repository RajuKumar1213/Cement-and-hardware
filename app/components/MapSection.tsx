import React from 'react';

export default function MapSection() {
    return (
        <section className="width-full bg-white">
            <div className="w-full h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.0734280637366!2d85.39557247487345!3d24.655600753425286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f31a87e5dc3d31%3A0xa9efe6c03bf5e857!2sMaa%20enterprises%20Sirdalla!5e0!3m2!1sen!2sin!4v1767883574554!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                ></iframe>
            </div>
        </section>
    );
}
