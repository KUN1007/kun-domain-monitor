import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { Globe } from 'lucide-react'

export default function Kun() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <Globe className="w-16 h-16 text-primary-500" />
        </div>
        <h1 className="mb-6 text-5xl font-bold">Domain Monitor</h1>
        <p className="max-w-2xl mb-8 text-xl text-gray-600 dark:text-gray-300">
          Never miss a domain expiration again. Get notified when your domains
          are about to expire and be ready to snap them up.
        </p>
        <div className="flex gap-4">
          <Button
            as={Link}
            href="/login"
            color="primary"
            size="lg"
            variant="solid"
          >
            Get Started
          </Button>
          <Button
            as={Link}
            href="/about"
            color="default"
            size="lg"
            variant="bordered"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
