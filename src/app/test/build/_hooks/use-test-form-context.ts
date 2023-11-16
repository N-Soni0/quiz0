import { UseFormReturn, useFormContext } from "react-hook-form";
import { TestFormData } from "../schema";

export function useTestFormContext() { 
    return useFormContext() as UseFormReturn<TestFormData>;
}

