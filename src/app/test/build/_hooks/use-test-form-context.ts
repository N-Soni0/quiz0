import { UseFormReturn, useFormContext } from "react-hook-form";
import { TestFormData } from "../_schemas";

export function useTestFormContext() { 
    return useFormContext() as UseFormReturn<TestFormData>;
}

