"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 mx-auto mb-6 text-destructive"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <AlertTriangle className="w-full h-full" />
        </motion.div>
        
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Something went wrong!
        </h1>
        
        <p className="text-muted-foreground mb-6">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        
        <Button
          onClick={reset}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try again
        </Button>
      </motion.div>
    </div>
  );
}