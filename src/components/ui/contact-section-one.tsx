import { Card } from './card'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'
import { Label } from './label'

export default function ContactSection() {
    return (
        <section className="bg-muted rounded-3xl -translate-y-10 py-15 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="text-4xl font-semibold lg:text-5xl">Contact Us</h1>
                <p className="text-muted-foreground mt-4 text-lg">We'd love to hear from you. Book your appointment or reach out for any queries.</p>
                <div className="mt-12 grid gap-12 lg:grid-cols-5">
                    <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h2 className="mb-3 text-lg font-semibold">Address</h2>
                                <p className="text-primary text-lg">54/6 New Plot, Near IDBI Bank Amalner</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">Phone</h3>
                                <p className="text-primary text-lg">+91 7823007304</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold">Email</h3>
                                <p className="text-primary text-lg">sumandent2205@gmail.com</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <iframe
                                title="Dr. Kothari's Suman Dental Hospital Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.930964295002!2d75.0600003154026!3d21.04200078598859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9c7e2e2e2e2e3%3A0x2b7b2e2e2e2e2e2e!2sDr.%20Kothari's%20Suman%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                                width="100%"
                                height="220"
                                style={{ border: 0, borderRadius: '1rem', width: '100%' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <form
                        action=""
                        className="@container lg:col-span-3">
                        <Card className="p-8 sm:p-12">
                            <h3 className="text-xl font-semibold">Book Your Appointment</h3>
                            <p className="mt-4 text-sm">Fill out the form below and we will get in touch with you soon.</p>

                            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                                <div className="grid gap-3 *:space-y-3">
                                    <div>
                                        <Label htmlFor="name">Your Name</Label>
                                        <Input type="text" id="name" required placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Your Email</Label>
                                        <Input type="email" id="email" required placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Your Phone Number</Label>
                                        <Input type="tel" id="phone" required placeholder="Your Phone Number" />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="msg">Message</Label>
                                    <Textarea id="msg" rows={3} placeholder="Message" />
                                </div>
                                <Button>Book Appointment</Button>
                            </div>
                        </Card>
                    </form>
                </div>
            </div>
        </section>
    )
}
