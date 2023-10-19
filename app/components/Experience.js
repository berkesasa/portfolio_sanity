import React from 'react'

function Experience({title, jobTitle, description, startDate, endDate}) {
    return (
        <div className="rounded-4xl border-2 border-sasaGreenLM shadow-lg shadow-teal-200 p-7 h-full flex flex-col justify-start">
            <div>
                <svg
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 64 64"
                    className="h-6 sm:h-8 dark:fill-sasaGreenDM"
                    xmlSpace="preserve"
                >
                    <path d="M58 44V16c0 -2.209 -1.791 -4 -4 -4H10c-2.209 0 -4 1.791 -4 4v28H0v4c0 2.209 1.791 4 4 4h56c2.209 0 4 -1.791 4 -4v-4h-6zm-20 2c0 1.105 -0.895 2 -2 2h-8c-1.105 0 -2 -0.895 -2 -2v-2h12v2zm12 -6H14V20h36v20z" />
                </svg>
            </div>
            <div className="flex max-sm:flex-col max-sm:space-y-2 justify-between">
                <div>
                    <h4>{title}</h4>
                    <span className="text-gray-700 dark:text-gray-100">{jobTitle}</span>
                </div>
                <div>{startDate}-{endDate}</div>
            </div>
            <p className="max-lg:mt-3 lg:mt-5 max-sm:text-sm">{description}</p>
        </div>
    )
}

export default Experience