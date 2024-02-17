'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/lib/icons/iconsSvg';
import { Textarea } from '@/components/ui/textarea';
import { configParams } from '../../../../config';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Email must be a valid email address.',
  }),
  subject: z.string().min(2, {
    message: 'Subject must be at least 2 characters.',
  }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(160, {
      message: 'Message must not be longer than 30 characters.',
    }),
});

const SupportForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    fetch(`${configParams.API_NESTJS_HOST}/api/inbox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: 'You have successfully sent a message !',
          });
        } else {
          toast({
            variant: 'destructive',
            title: 'You have successfully sent a message !',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-screen-md my-10">
      <div className="flex flex-col space-y-2 w-2/3">
        <h1 className="text-white text-2xl font-bold tracking-tight">
          Contact us
        </h1>
        <p className="text-[17px] font-medium text-muted-foreground">
          Any questions? We would be happy to help you
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-4/5 space-y-6 py-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full h-[53px] flex items-center pl-4 bg-zinc-800 rounded-md">
                    <Icons.user />
                    <Input
                      className="bg-zinc-800 border-none rounded-md text-white text-[17px] font-medium ml-3"
                      placeholder="Name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full h-[53px] flex items-center pl-4 bg-zinc-800 rounded-md">
                    <Icons.email />
                    <Input
                      className="bg-zinc-800 border-none rounded-md text-white text-[17px] font-medium ml-3"
                      placeholder="Email"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full h-[53px] flex items-center pl-4 bg-zinc-800 rounded-md">
                    <Icons.pen />
                    <Input
                      className="bg-zinc-800 border-none rounded-md text-white text-[17px] font-medium ml-3"
                      placeholder="Subject"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full flex pl-4 bg-zinc-800 rounded-md">
                    <div className="mt-3">
                      <Icons.message />
                    </div>
                    <Textarea
                      className="bg-zinc-800 border-none rounded-md text-white text-[17px] font-medium ml-3"
                      placeholder="Message"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            size={'lg'}
            className="!mt-[100px] w-full bg-[#4700ff] font-semibold"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SupportForm;
