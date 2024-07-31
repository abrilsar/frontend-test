'use client';

import { features } from '@/constants/constats';
import Card from '../card/Card';
import Title from '../title/Title';

export default function Features() {
  return (
    <div className="flex flex-col justify-center py-5">
      <Title
        title="Cutting-edge features for advanced analytics"
        text="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        subtitle="Features"
      ></Title>
      <div className="py-16">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, key) => (
            <Card
              key={key}
              name={feature.name}
              description={feature.description}
              imageUrl=""
              customClass={feature.icon}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
