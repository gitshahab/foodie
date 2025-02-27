'use client';

import { useActionState } from "react";

const MealFormSubmit = () => {
    const { pending } = useActionState();
  return (
    <button disabled={pending}>
        {pending ? "Submitting..." : "Share Meal"}
    </button>
  )
}

export default MealFormSubmit
