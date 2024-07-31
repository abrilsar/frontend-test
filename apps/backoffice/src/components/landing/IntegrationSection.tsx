'use client';
import Title from '@/components/title/Title';
import { integrations } from '@/constants/constats';
import Card from '@/components/card/Card';

export default function IntegrationSection() {
  return (
    <div className="flex flex-col justify-center py-5 sm:pt-3 md:pt-5 lg:pt-10">
      <Title
        title="Get more value from your tools"
        text="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favourite tools are just a click away."
        subtitle="Integrations"
      ></Title>
      <div className="py-12">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, key) => (
            <Card
              key={key}
              name={integration.name}
              description={integration.description}
              imageUrl={integration.imageUrl}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
