'use client'

import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast, Bounce, ToastContainer } from 'react-toastify'
import { motion, AnimatePresence } from 'framer-motion'
import { Transition } from './ui/Transitions'
import { TextReveal } from './ui/Typography'
import { ArrowUpRight } from './ui/Icons'
import { Input, Textarea } from './ui/Input'

const validationSchema = Yup.object({
  fullname: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .email('Por favor, informe um e-mail válido.')
    .required('E-mail é obrigatório.'),
  message: Yup.string().required('Mensagem é obrigatória.'),
})

const EmailModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)
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
          setIsOpen(false)
        } else {
          throw new Error('Erro na resposta')
        }
      } catch (error) {
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
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  return (
    <>
      {/* Botão que abre o modal */}
      <Transition>
        <button
          onClick={() => setIsOpen(true)}
          className='flex gap-2 border border-darkPurple-900/85 rounded-full p-3  transition-colors cursor-pointer'
        >
          <TextReveal>Email</TextReveal>
          <ArrowUpRight />
        </button>
      </Transition>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm'
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className='bg-fontColor-50 rounded-xl p-6 w-full max-w-md relative shadow-sm'
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-4 right-4 text-fontColor-900/50 hover:text-fontColor-50 text-xl'
              >
                ✕
              </button>

              <h2 className='text-2xl font-bold mb-6 text-darkPurple-900'>
                Envie uma mensagem
              </h2>

              <form onSubmit={formik.handleSubmit} className='space-y-4'>
                <div>
                  <Input
                    id='fullname'
                    name='fullname'
                    placeholder='Nome completo'
                    className='w-full rounded-lg px-4 py-2 border border-darkPurple-500 focus:border-neonGreen-400 focus:outline-none text-fontColor-900'
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.fullname && formik.errors.fullname && (
                    <p className='text-red-400 text-sm mt-1'>
                      {formik.errors.fullname}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='E-mail'
                    className='w-full rounded-lg px-4 py-2 border border-darkPurple-500 focus:border-neonGreen-400 focus:outline-none text-fontColor-900'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className='text-red-400 text-sm mt-1'>
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    id='message'
                    name='message'
                    rows={4}
                    placeholder='Digite sua mensagem'
                    className='w-full rounded-lg px-4 py-2 border border-darkPurple-500 focus:border-neonGreen-400 focus:outline-none text-fontColor-900'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className='text-red-400 text-sm mt-1'>
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-darkPurple-400 text-fontColor-50 py-3 rounded-full font-medium hover:opacity-85 transition-all duration-200 disabled:opacity-50 cursor-pointer'
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
  )
}

export default EmailModal
