import { Button } from 'antd'
import classNames from 'classnames'
import styles from './Button.module.scss'
const ButtonBasic = ({
  type = 1,
  children,
  isHover,
  onClick,
  disabled,
  loading = false,
  className = null,
  textColor = 'black',
  ...props
}) => {
  return (
    <Button
      style={{position:'relative',color:textColor}}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={`${styles['second-btn']}  ${type === 1 && styles['second-btn']} ${isHover && styles['pri-btn-is-hover']} ${className}`}
      // className={classNames(
      //   styles['style-bt-antd'],
      //   { styles['second-btn']:type === 1},
      //   { styles['pri-btn-is-hover']:isHover}
      // )}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ButtonBasic
