import { useState } from "react"


function NewFeedBackModal() {
    const [showTextArea, setShowTextArea] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleNextClick = () => {
        setShowTextArea(true)
    }
    const handleSubmitClick = () => {
        alert("Feedback submitted!"); 
    };
    const handlePreviousClick = () => {
        setShowTextArea(false); // Go back to the previous section
    };
    const handleCloseClick = () => {
        setIsModalOpen(false); // Closes the modal
    };
    if (!isModalOpen) return null
    return (
        <>
            <div className="fixed bottom-5 right-5 bg-white p-6 rounded-lg border border-gray-300 shadow-xl w-[365px] h-[390px] ">
                <div className="bg-white  rounded-lg w-full"  >
                    <h2 className="text-lg font-semibold mb-4 ">Overall, how was your experience with Doubt support feature? </h2>
                </div>
                {!showTextArea ? (
                    <div className="flex flex-col space-y-2 mb-4">
                        <button className="px-4 py-2 rounded-md border-transparent hover:bg-gray-100 text-sm text-left">
                            Not at all useful
                        </button>
                        <button className="px-4 py-2 rounded-md border-transparent hover:bg-gray-100 text-sm text-left">
                            Slightly useful
                        </button>
                        <button className="px-4 py-2 rounded-md border-transparent hover:bg-gray-100 text-sm text-left">
                            Moderately useful
                        </button>
                        <button className="px-4 py-2 rounded-md border-transparent hover:bg-gray-100 text-sm text-left">
                            Very useful
                        </button>
                        <button className="px-4 py-2 rounded-md border-transparent hover:bg-gray-100 text-sm text-left">
                            Extremely useful
                        </button>
                    </div>
                ) : (

                    <div className="flex flex-col space-y-2 mb-4">
                        <h6 className="text-gray-600 font-semibold text-sm">Any custom feedback or suggestions?</h6>
                        <textarea
                            className="px-4 py-2 rounded-md border border-gray-300 text-sm"
                            placeholder="Type your message here!"
                            rows={8}
                        ></textarea>
                    </div>
                )}


                {!showTextArea ? (
                    // Buttons for Initial Feedback Section
                    <>
                        <div className="flex justify-between mb-2">
                            <button
                                className="bg-white text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
                                onClick={handleCloseClick}
                            >
                                I'll do it later
                            </button>
                            <button
                                onClick={handleNextClick}
                                className="bg-white text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-300"
                            >
                                Next
                            </button>
                        </div>

                    </>
                ) : (
                    // Buttons for Textarea Section
                    <>
                        <div className="flex justify-end space-x-4  mb-2">
                            <button
                                onClick={handlePreviousClick}
                                className="bg-white text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-300"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleSubmitClick}
                                className="bg-indigo-800 text-white px-4 py-2 rounded-md hover:bg-indigo-900 border border-gray-300"
                            >
                                Submit
                            </button>
                        </div>

                    </>
                )}
            </div>

        </>
    )
}

export default NewFeedBackModal


