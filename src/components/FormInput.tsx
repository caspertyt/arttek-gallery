interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export default function FormInput({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
      />
    </div>
  );
} 