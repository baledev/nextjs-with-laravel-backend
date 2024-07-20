import { cn } from "@/lib/utils"

const InputError = ({ messages = [], className = '' }) => (
  <>
    {messages.length > 0 && (
      <>
        {messages.map((message, index) => (
          <p
            className={cn('text-sm text-red-600', className)}
            key={index}>
            {message}
          </p>
        ))}
      </>
    )}
  </>
)

export default InputError
