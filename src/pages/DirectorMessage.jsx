import {
  MessageSquare,
  User,
  Award,
  Quote
} from 'lucide-react';

const DirectorMessage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <MessageSquare size={48} className="mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                From Director's/Founder's Desk
              </h1>
            </div>
            <p className="text-xl md:text-2xl">
              A Message of Vision and Commitment
            </p>
          </div>
        </div>
      </section>

      {/* Profile and Message Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Profile Card */}
            <div className="card p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <User size={96} className="text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Dr. Mamta Srivastava
                  </h2>
                  <p className="text-xl text-primary-600 font-semibold mb-4">
                    Founder & Director
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Visionary leader and educator with a passion for transforming lives through quality education
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium flex items-center">
                      <Award size={16} className="mr-2" />
                      Ph.D. in Education
                    </span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Founder - City College Barabanki
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="card p-8 md:p-12">
              <div className="mb-8">
                <Quote size={48} className="text-primary-600 opacity-50" />
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  We are living in an age of uncertainty, the dynamics of which is highly unpredictable,
                  confusing, and complex. Change has become a routine in all spheres and the pace of change
                  is phenomenal. The changes are far too many and most difficult to accept, hence there is
                  a growing sense of frustration.
                </p>

                <p>
                  The task ahead of young citizens is to train and prepare themselves to compete, cooperate,
                  and coexist with others to shape a better world. They will have to be equipped with a
                  bundle of skills, which include those of cognitive, affective, motor and social kind.
                </p>

                <p>
                  The younger generation has to be groomed into well informed, well prepared, and well
                  trained. The needs of our times is clearly apparent. When educational institutions play
                  a leading role in the academic field, social consciousness among society automatically
                  comes. In this endeavour, we need to instill confidence and morale in our younger
                  generation to face challenges bravely.
                </p>

                <p>
                  City College Barabanki is committed to providing an educational environment that nurtures
                  excellence, innovation, and character. Our aim is not just to impart knowledge but to
                  develop responsible citizens who can contribute meaningfully to society.
                </p>

                <p>
                  We believe that education is the most powerful tool for transformation. Through our
                  comprehensive programs, experienced faculty, and modern facilities, we strive to create
                  an ecosystem where every student can discover their potential and achieve their dreams.
                </p>

                <p>
                  Our focus is on holistic development - nurturing not just academic excellence but also
                  values, ethics, leadership qualities, and social responsibility. We emphasize practical
                  learning, critical thinking, and problem-solving skills that are essential for success
                  in today's dynamic world.
                </p>

                <p>
                  I invite you to join us in this journey of learning and growth. Together, we can build
                  a brighter future for our students and our society.
                </p>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="font-semibold text-gray-800 text-xl">
                    Dr. Mamta Srivastava
                  </p>
                  <p className="text-primary-600 font-medium">
                    Founder & Director, City College Barabanki
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Quote size={48} className="text-primary-600 opacity-50 ml-auto transform rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Commitment
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                "At City College Barabanki, we are dedicated to creating an environment where every
                student is valued, every talent is nurtured, and every dream is supported. We believe
                in the power of education to transform lives and build a better tomorrow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of an institution that believes in your potential and is committed to your success
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default DirectorMessage;
