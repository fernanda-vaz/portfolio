'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type Variants = 'DEFAULT' | 'PROJECT' | 'BUTTON' | 'TEXT'

interface ContextProps {
  variant: Variants
  setVariant: Dispatch<SetStateAction<Variants>>
}

const Context = createContext<ContextProps>({
  variant: 'DEFAULT',
  setVariant: () => {},
})

const VariantProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<Variants>('DEFAULT')

  return (
    <Context.Provider value={{ variant, setVariant }}>
      {children}
    </Context.Provider>
  )
}

const useVariants = () => {
  const { setVariant, variant } = useContext(Context)

  return { variant, setVariant }
}

export { useVariants, VariantProvider }
