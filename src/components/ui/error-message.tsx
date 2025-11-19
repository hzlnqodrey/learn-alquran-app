import * as React from "react";
import { HTMLAttributes } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement>{
    message: string;
    onRetry?: () => void;
}

export function ErrorMessage({
    message,
    onRetry,
    className,
    ...props
}: ErrorMessageProps) {
    return(
        <div
            role="alert"
            className={cn(
                "flex flex-col items-center justify-center gap-4 rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center",
                className
            )}
            {...props}
        >
            <AlertCircle className="h-8 w-8 text-destructive"/>
            <div className="space-y-2">
                <h3 className="font-bold text-destructive">Error</h3>
                <p className="text-sm text-muted-foreground">{message}</p>
            </div>
            {onRetry &&(
                <Button
                    onClick={onRetry}
                    variant="outline"
                    size="sm"
                >
                    Try Again
                </Button>
            )}
        </div>
    )
}