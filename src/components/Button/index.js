export default function Button({ children }) {
  return (
    <button className="p-2 bg-blue-500 text-white" type="button">
      {children}
    </button>
  )
}