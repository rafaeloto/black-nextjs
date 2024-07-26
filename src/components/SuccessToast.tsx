import { Button, Toast, ToastBody } from "reactstrap"

const SuccessToast = (props: {
  toastIsOpen: boolean
  setToastIsOpen: (isOpen: boolean) => void
}) => {
  return (
    <Toast
      className="bg-success text-white fixed-top ms-auto me-4 mb-4"
      isOpen={props.toastIsOpen}
      fade
    >
      <ToastBody className="d-flex justify-content-between">
        Produto adicionado ao carrinho.
        <Button
          close
          style={{ filter: 'invert(1)' }}
          onClick={() => props.setToastIsOpen(false)}
        ></Button>
      </ToastBody>
    </Toast>
  )
}

export default SuccessToast