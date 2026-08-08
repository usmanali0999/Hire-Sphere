interface Props {
  message: string
}

export default function Toast({ message }: Props) {
  return (
    <div className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  )
}