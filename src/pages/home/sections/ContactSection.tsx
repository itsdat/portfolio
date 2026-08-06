import BaseHeading from "@/components/common/heading/BaseHeading";
import BaseInput from "@/components/common/input/BaseInput";
import BaseSocial from "@/components/common/social/BaseSocial";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import GlobeWireframe from "@/components/ui/globe-wireframe";
import { Card } from "@/components/ui/layer-stack";
import PixelBackground from "@/components/ui/pixel-background";
import Typeanimation from "@/components/ui/typeanimation";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

interface IMail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendMail = async (data: IMail) => {
    try {
      setLoading(true);

      await emailjs.send(
        "service_grmxcif",
        "template_qj2qoaa",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "C4QQSAN9PqvSXmU9r",
      );

      alert("Send success");
      return true;
    } catch (error: any) {
      alert("Send fail");
      console.log("error send message", error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const success = await handleSendMail(data as unknown as IMail);

    if (success!) {
      formRef.current?.reset();
    }
  };
  return (
    <PixelBackground className="relative z-0">
      <div className="w-full max-w-7xl mx-auto" id="contact">
        <BaseHeading title="Contact me" />
        <div className="w-full flex md:flex-row flex-col items-start justify-between gap-5">
          <div className="relative w-full md:w-3/5 h-150 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center pt-10 sm:pt-16 text-center px-4">
              <h1
                className="font-bold tracking-tight leading-tight text-black dark:text-white
          text-3xl sm:text-5xl"
              >
                {/* <span className="block text-2xl font-normal w-[60%] text-center mx-auto">
                  Have a project in mind or want to discuss potential
                  opportunities? Feel free to reach out!
                </span> */}
                <div className="flex items-center justify-center">
                  <div className="max-w-2xl text-center">
                    <h1 className="text-3xl md:text-2xl font-normal text-primary leading-0 md:mb-0 mb-3">
                      Have a project in mind?
                    </h1>
                    <Typeanimation
                      words={[
                        "Let's explore possibilities.",
                        "Let's explore new opportunities.",
                        "Let's explore your full potential.",
                      ]}
                      typingSpeed="slow"
                      deletingSpeed="slow"
                      gradientFrom="red-500"
                      gradientTo="yellow-500"
                      pauseDuration={2000}
                      className="text-2xl md:text-2xl font-medium text-teal-600 leading-0"
                    />
                  </div>
                </div>
              </h1>
            </div>

            <div className="absolute z-9999 md:bottom-[-45%] scale-75 md:scale-100 sm:bottom-[-35%] left-1/2 w-[130%] sm:w-full h-full -translate-x-1/2">
              <GlobeWireframe
                className="w-full h-full"
                variant="solid"
                scale={1}
              />
            </div>
          </div>

          <div className="w-full md:w-2/5 md:px-0 px-4">
            
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full border-2 border-dashed border-slate-300 dark:border-gray-500 p-2 rounded-2xl"
            >
              <Card className="w-full bg-white dark:bg-neutral-950 shadow-xl rounded-2xl md:p-3">
                <CardHeader className="flex flex-col gap-1 px-4 py-2"></CardHeader>

                <CardContent className="pt-0 flex flex-col gap-5 px-4">
                  <div className="flex items-center justify-between gap-5">
                    <BaseInput
                      name="name"
                      label="Name"
                      placeholder="Name"
                      disabled={loading}
                      required
                    />
                    <BaseInput
                      name="email"
                      label="Email"
                      placeholder="Email"
                      type="email"
                      disabled={loading}
                      required
                    />
                  </div>
                  <BaseInput
                    name="subject"
                    label="Subject"
                    placeholder="Subject"
                    disabled={loading}
                    required
                  />
                  <BaseInput
                    name="message"
                    label="Message"
                    placeholder="Message"
                    as="textarea"
                    disabled={loading}
                    required
                    className="max-h-32"
                  />
                </CardContent>

                <CardFooter className="flex justify-end items-center px-4 py-3 mt-3">
                  <Button className="rounded-full px-4 py-1 text-sm transition-colors">
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send /> Send Message
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </form>
            <BaseSocial />
          </div>
        </div>
      </div>
    </PixelBackground>
  );
}
