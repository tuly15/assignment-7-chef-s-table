import PropTypes from 'prop-types';

const CookSection = ({ wTCooks, handlePreparing, cCooking }) => {
    return (
        <div className='w-full lg:w-[514px] h-full px-2 border-[1px] border-[rgba(40,40,40,0.2)] rounded-2xl'>
            <div className="">
                <h3 className="text-2xl mt-8 mb-4 font-semibold text-center">Want to cook: {wTCooks.length}</h3>
                <hr className="border-t-[1px] mb-6 border-[rgba(40,40,40,0.15)] w-[350px] mx-auto" />
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className='*:border-none bg-[rgba(40,40,40,0.03)] text-[rgba(40,40,40,0.70)] fira-sans'>

                            {
                                wTCooks.map((wTCook, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{wTCook.recipe_name}</td>
                                    <td>{wTCook.preparing_time}</td>
                                    <td>{wTCook.calories}</td>
                                    <td><button onClick={() => handlePreparing(wTCook)} className='btn p-0 h-[38px] w-[115px] bg-[#0BE58A] rounded-[50px] font-semibold text-black'>Preparing</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="">
                <h3 className="text-2xl mt-8 mb-4 font-semibold text-center">Currently cooking:{cCooking.length}</h3>
                <hr className="border-t-[1px] mb-6 border-[rgba(40,40,40,0.15)] w-[350px] mx-auto" />
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className='*:border-none bg-[rgba(40,40,40,0.03)] text-[rgba(40,40,40,0.70)] fira-sans'>

                            {
                                cCooking.map((c, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{c.recipe_name}</td>
                                        <td>{c.preparing_time}</td>
                                        <td>{c.calories}</td>
                                    </tr>)
                            }
                        </tbody>
                        <tbody className='*:border-none text-[rgba(40,40,40,1)] fira-sans'>
                            <tr>
                                <th></th>
                                <td></td>
                                <td>Total Time = {
                                    cCooking.reduce((acc,current)=>acc+parseInt(current.preparing_time),0)
                                } minutes
                                </td>
                                <td>Total Calories = {
                                    cCooking.reduce((acc,current)=>acc+parseInt(current.calories),0)
                                } calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

CookSection.propTypes = {
    wTCooks: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    cCooking: PropTypes.array.isRequired
};

export default CookSection;





