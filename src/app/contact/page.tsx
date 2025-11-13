'use client';

import Image from "next/image";
import { Button, DatePicker, Form, FormProps, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { sendContactEmail } from "../actions/contact";
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { motion } from "motion/react"

const dateFormat = 'DD.MM.YYYY';


export default function Contact() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  type FieldType = {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    date?: Dayjs;
    message?: string;
  };

  /* useEffect(() => {
    setTimeout(() => {
      setIsSubmitSuccess(true);
    }, 5000);
  }, []); */

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    // console.log('Success:', values);
    setIsLoading(true);
    setErrorMessage(''); // Clear any previous errors
    setIsSubmitSuccess(false); // Clear any previous success
    
    try {
      // Show loading message
      // message.loading('Sender melding...', 0);

      // Format the date to string before sending to server action
      const formattedData = {
        firstName: values.firstName!,
        lastName: values.lastName!,
        email: values.email!,
        mobile: values.mobile,
        date: values.date ? values.date.format(dateFormat) : undefined,
        message: values.message,
      };

      // Call server action
      const result = await sendContactEmail(formattedData);

      // Hide loading message
      // message.destroy();

      if (result.success) {
        // message.success('Takk for henvendelsen! Vi tar kontakt snart.');
        setIsSubmitSuccess(true);
        setIsLoading(false);
        form.resetFields();
        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitSuccess(false), 5000);
      } else {
        setIsLoading(false);
        console.error('Server action failed:', result.error);
        setErrorMessage(result.error || 'Noe gikk galt. Prøv igjen senere.');
        // message.error(result.error || 'Noe gikk galt. Prøv igjen senere.');
      }
    } catch (error) {
      setIsLoading(false);
      // message.destroy();
      console.error('Client error:', error);
      setErrorMessage('Noe gikk galt. Prøv igjen senere.');
      // message.error('Noe gikk galt. Prøv igjen senere.');
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    // console.log('Failed:', errorInfo);
    setErrorMessage('Vennligst fyll ut alle påkrevde felt korrekt.');
    setIsLoading(false);
  };


  return (
    <main className="pt-34 md:text-lg font-serif">
      <div className="text-center mt-16 max-w-lg mx-6 md:mx-auto">
        <h1 className="text-5xl md:text-7xl">La oss snakke blomster!</h1>
        <p className="mt-12 font-sans">Enten planene er spikret, eller bare i startfasen, gleder vi oss til å høre mer.</p>
        <p className="mt-12 italic font-extralight font-sans">Del gjerne litt om anledningen du ønsker blomster til nedenfor, så tar vi kontakt for å snakke om tilgjengelighet, uttrykk og neste steg.</p>
      </div>

      <div className="mt-16 md:bg-white md:flex md:justify-center mx-8 lg:mx-24">
        <div className="w-full md:max-w-7xl md:flex">
          <div className="hidden md:block">
            <Image
              src="/contact/calla.jpg"
              alt="Beskrivende tekst for bildet"
              width={500}
              height={500}
              className="object-cover h-full"
            />
          </div>
          <div className="bg-fv-300 w-full md:w-2/3 pt-12 px-4 md:px-8">
            <div className="[&_.ant-form-item-label>label]:font-semibold w-full">
              <Form
                form={form}
                name="basic"
                layout="vertical"
                className="w-full"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
              <div className="sm:flex justify-between gap-4 w-full">
                <Form.Item<FieldType>
                  label="Fornavn"
                  name="firstName"
                  rules={[{ required: true, message: 'Venligst oppgi fornavn' }]}
                  className="w-full"
                >
                  <Input className="w-full h-12" />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Etternavn"
                  name="lastName"
                  rules={[{ required: true, message: 'Venligst oppgi etternavn' }]}
                  className="w-full"
                >
                  <Input className="w-full h-12" />
                </Form.Item>
              </div>
              <div className="sm:flex justify-between gap-4">
                <Form.Item<FieldType>
                  label="E-post"
                  name="email"
                  rules={[
                    { required: true, message: 'Venligst oppgi e-post' },
                    { type: 'email', message: 'Venligst oppgi en gyldig e-postadresse' }
                  ]}
                  className="w-full"
                >
                  <Input className="w-full h-12" />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Mobilnummer"
                  name="mobile"
                  className="w-full"
                  rules={[{ type: 'string', pattern: /^\+?[0-9\s\-]{7,15}$/, message: 'Venligst oppgi et gyldig mobilnummer' }]}
                >
                  <Input className="w-full h-12" />
                </Form.Item>
              </div>
              <div className="sm:flex sm:mr-4">
                <Form.Item<FieldType>
                  label="Dato"
                  name="date"
                  className="w-full md:w-1/2"
                >
                  <DatePicker 
                    className="w-full h-12" 
                    format={dateFormat}
                    placeholder="For din anledning"

                  />
                </Form.Item>
              </div>

              <div className="mt-8">
                <Form.Item label="Melding" name="message">
                  <TextArea
                    style={{ height: 200 }}
                  />
                </Form.Item>
              </div>

              <div className="flex justify-end mt-12">
                {/* Messages container - takes available space */}
                <div className="flex-1 mr-4">
                  {isSubmitSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <p className="text-green-600 font-medium text-center bg-green-50 border border-green-200 rounded-md py-2 px-4">
                        ✓ Melding sendt! Vi tar kontakt snart.
                      </p>
                    </motion.div>
                  )}
                  {errorMessage && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <p className="text-red-600 font-medium text-center bg-red-50 border border-red-200 rounded-md py-2 px-4">
                        ✗ {errorMessage}
                      </p>
                    </motion.div>
                  )}
                </div>
                
                {/* Button - always on the right */}
                <Form.Item label={null} className="">
                  <Button type="primary" htmlType="submit" shape="round" size="large" loading={isLoading}>
                    Send melding
                  </Button>
                </Form.Item>
              </div>
            </Form>
            </div>
          </div>
        </div>
      </div>
      

      <div className="max-w-lg mt-18 mb-32 space-y-12 text-center mx-6 md:mx-auto">
        <p className="font-light text-xl italic">Hold et øye med innboksen, vi tar kontakt snart!</p>
        <p className="font-sans font-extralight">Vi pleier å svare innen 24 timer (mandag-fredag). Hører du ikke fra oss innen den tid, ta gjerne en titt i søppelpostmappen, bare for sikkerhets skyld.</p>
        <p className="font-bold">Vi gleder oss til å høre fra deg!</p>
      </div>
    </main>
  );
}