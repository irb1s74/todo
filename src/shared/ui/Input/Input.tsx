import React, {
  type InputHTMLAttributes,
  memo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { HStack } from '../Stack'
import cls from './Input.module.scss'
import classNames from 'classnames'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>

type InputSize = 's' | 'm' | 'l'

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  label?: string
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
  size?: InputSize
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    label,
    size = 'm',
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  }

  const input = (
    <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
    </div>
  )

  if (label) {
    return (
      <HStack max gap='8'>
        <p>{label}</p>
        {input}
      </HStack>
    )
  }

  return input
})
