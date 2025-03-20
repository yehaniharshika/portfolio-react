export const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white"
                    style={{fontFamily: 'Montserrat, sans-serif'}}>
                    My <span style={{fontFamily: 'Montserrat, sans-serif', color: "#00cec9"}}>Education</span>
                </h2>

                <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg"
                   style={{fontFamily: 'Montserrat, sans-serif'}}>
                    I have experience developing software using cutting-edge technologies, ensuring high-quality
                    solutions tailored to meet business needs.
                </p>

                {/* Cards Section */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Bachelor of Science</h3>
                        <p className="text-gray-600 dark:text-gray-300">Completed in 2020 at XYZ University. Major in Computer Science.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Master of Technology</h3>
                        <p className="text-gray-600 dark:text-gray-300">Completed in 2023 at ABC University. Specialization in Software Engineering.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Web Development Bootcamp</h3>
                        <p className="text-gray-600 dark:text-gray-300">Intensive course completed in 2021. Focused on full-stack web development.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">AI and Machine Learning</h3>
                        <p className="text-gray-600 dark:text-gray-300">Certificate in 2022 from Tech Institute, specializing in AI and machine learning techniques.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
