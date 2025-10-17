'use client';

import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { INVESTMENT_GOALS } from "@/lib/constants";
import { Select } from "@radix-ui/react-select";
import { Mingzat } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: '',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log('Sign Up Form Data:', data);
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    }

    return (
      <>
        <h1 className="form-title">Sign Up & Personalize</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField 
                name="fullName"
                label="Full Name"
                placeholder="John Doe"
                register={register}
                error={errors.fullName}
                validation={{ required: 'Full name is required', minLength: 2 }}
            />

            <InputField 
                name="email"
                label="Email"
                placeholder="john.doe@gmail.com"
                register={register}
                error={errors.email}
                validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Invalid email address' }}
            />

            <InputField 
                name="password"
                label="Password"
                placeholder="Enter a strong password"
                type="password"
                register={register}
                error={errors.password}
                validation={{ required: 'Password is required', minLength: 8 }}
            />

            <InputField 
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                register={register}
                error={errors.password}
                validation={{ required: 'Password is required', minLength: 8 }}
            />

            <SelectField 
                name="investmentGoals"
                label="Investment Goals"
                placeholder="Select your investment goals"
                options={INVESTMENT_GOALS}
                control={control}
                error={errors.investmentGoals}
                required
            />

            <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                {isSubmitting ? 'Creating Account..' : 'Start Your Investment Journey'}
            </Button>
        </form>
      </>
    )
}

export default SignUp;