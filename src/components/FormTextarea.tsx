interface FormTextareaProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export default function FormTextarea({
  label,
  name,
  required = false,
  placeholder,
  rows = 4,
}: FormTextareaProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors resize-none"
      />
    </div>
  );
} 