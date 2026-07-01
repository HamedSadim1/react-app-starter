interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-surface-700 dark:text-surface-300">
      {label}
    </label>
    {children}
  </div>
);

export default FormField;
