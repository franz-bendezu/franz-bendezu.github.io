import React from "react";
import { COURSE_CERTIFICATIONS } from "@/constants/experiences";
import Card from "../ui/Card";

const Certifications = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COURSE_CERTIFICATIONS.map((certification) => (
          <Card key={certification.id} className="bg-white dark:bg-gray-800 p-4">
            <h3 className="text-lg font-semibold">{certification.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{certification.date}</p>
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Certification
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
