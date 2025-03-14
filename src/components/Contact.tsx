'use client'

import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { motion } from 'motion/react'
import { SlideIn, Transition } from './ui/Transitions'
import { SectionHeading, TextReveal } from './ui/Typography'
import { Input, Textarea } from './ui/Input'
import { About, SocialHandle } from '@/utils/interface'

const validationSchema = Yup.object({
  fullname: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .email('Por favor, informe um e-mail válido.')
    .required('E-mail é obrigatório.'),
  message: Yup.string().required('Mensagem é obrigatória.'),
})

interface ContactProps {
  email: string
  social_handle: SocialHandle[]
  about: About
}

export default function Contact({ email, social_handle, about }: ContactProps) {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: '',
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://submit-form.com/kLkLgWqF9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(values),
        })

        if (response.ok) {
          toast.success('Mensagem enviada com sucesso!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          })
          formik.resetForm()
        } else {
          toast.error('Erro ao enviar a mensagem. Tente novamente.', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          })
        }
      } catch (error) {
        console.error('Erro:', error)
        toast.error('Erro ao enviar a mensagem. Tente novamente.', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        })
      }
    },
  })

  return (
    <motion.section id='contact' className='relative'>
      <span className='blob size-1/2 absolute top-20 right-0 blur-[100px] -z-10' />
      <div className='p-4 md:p-8 md:px-16'>
        <SectionHeading>
          <SlideIn className='text-fontColor-50/40'>Vamos</SlideIn> <br />
          <SlideIn>conversar.</SlideIn>
        </SectionHeading>

        <div className='grid md:grid-cols-2 gap-10 md:pt-16'>
          <form className='space-y-4' onSubmit={formik.handleSubmit}>
            <div className='flex gap-4'>
              <Transition className='w-full'>
                <Input
                  id='name'
                  name='fullname'
                  placeholder='Nome completo'
                  className='border-0 border-b rounded-none'
                  required
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <div>
                  {formik.touched.fullname && formik.errors.fullname ? (
                    <div>{formik.errors.fullname}</div>
                  ) : null}
                </div>
              </Transition>

              <Transition className='w-full'>
                <Input
                  id='email'
                  name='email'
                  placeholder='E-mail'
                  type='email'
                  className='border-0 border-b rounded-none'
                  required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <div>
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
              </Transition>
            </div>

            <div className='space-y-2'>
              <Transition className='w-full'>
                <Textarea
                  id='message'
                  name='message'
                  placeholder='Digite sua mensagem'
                  className='min-h-[100px] border-0 border-b rounded-none resize-none'
                  required
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <div>
                  {formik.touched.message && formik.errors.message ? (
                    <div>{formik.errors.message}</div>
                  ) : null}
                </div>
              </Transition>
            </div>
            <div>
              <Transition>
                <motion.button
                  whileHover='whileHover'
                  initial='initial'
                  className='border border-fontColor-50/30 px-8 py-2 rounded-3xl relative overflow-hidden'
                  type='submit'
                >
                  <TextReveal className='uppercase cursor-pointer'>
                    Enviar Mensagem
                  </TextReveal>
                </motion.button>
              </Transition>
            </div>
          </form>

          <div className='flex flex-col md:justify-self-end mx-auto'>
            <div className='pb-4'>
              <Transition>
                <span className='text-fontColor-50/90'>Entre em contato</span>
              </Transition>

              <div className='text-sm md:text-xl lg:text-3xl font-bold py-2'>
                <Transition>
                  <TextReveal>{email}</TextReveal>
                </Transition>
              </div>
              <Transition>
                <div className='pb-1 text-fontColor-50/80'>
                  {about.phoneNumber}
                </div>
              </Transition>
              <Transition>
                <div className='pb-1 text-fontColor-50/80'>{about.address}</div>
              </Transition>
            </div>

            <div className='flex md:gap-8 gap-4 mt-auto md:pb-16'>
              {social_handle.map((social, i) =>
                social.enabled ? (
                  <Transition
                    key={social.id}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Link href={social.url} target='_blank'>
                      <TextReveal>{social.platform}</TextReveal>
                    </Link>
                  </Transition>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className='flex items-center justify-between md:px-8 px-2 py-4 text-sm'>
        <Transition>
          <div>
            &copy; {new Date().getFullYear()} | Todos os direitos reservados.
          </div>
        </Transition>

        <Transition>
          <p>
            desenvolvido por @
            <Link
              href={'https://www.linkedin.com/in/vaz-fernanda/'}
              className='hover:underline'
            >
              Fernanda Vaz
            </Link>
          </p>
        </Transition>
      </footer>

      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
    </motion.section>
  )
}
