"use client"

import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Immigration Consultant", 
    company: "Global Mobility Solutions",
    content: "Working with Aditon has transformed our lead generation process. The quality of HNWI leads we receive is exceptional.",
  },
  {
    name: "Michael Chen",
    role: "Managing Director",
    company: "Pacific Immigration Services", 
    content: "The ROI we've seen since partnering with Aditon has been remarkable. Their leads are well-qualified and ready to invest.",
  },
  {
    name: "Emma Rodriguez",
    role: "Senior Partner",
    company: "European Migration Group",
    content: "Aditon's expertise in targeting high-net-worth individuals has significantly improved our conversion rates.",
  },
]

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto px-4"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem 
            key={index} 
            className="pl-2 md:pl-4 w-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="h-full">
              <Card className="h-full">
                <CardContent className="p-4 md:p-6 h-full">
                  <blockquote className="space-y-4 h-full flex flex-col justify-between">
                    <p className="text-base md:text-lg">{testimonial.content}</p>
                    <footer>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden sm:block">
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </div>
    </Carousel>
  )
}
