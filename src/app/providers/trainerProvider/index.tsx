import { Trainereducer, useContext} from "react";
import {
  TrainerStateContext,
  TrainerActionContext,
  INITIAL_STATE,
  ITrainer,
} from "./context";

import { TrainerReducer } from "./reducer";
import { getTrainerError, getTrainerPending, getTrainersError, getTrainersPending, getTrainersSuccess } from "./action";
import axios from "axios";


 const useTrainerState = () => {
  const context =useContext(TrainerStateContext);
  if (!context) {
    throw Error("Please ensure you have used the TrainerStateContext Provider");
  }
  return context;
};

 const useTrainerActionState = () => {
  const context = useContext(TrainerActionContext);;
  if (!context) {
    throw Error("Please ensure you have used the TrainerActionContext Provider");
  }
  return context;
};


const UseTrainers = () => {
  return {
    ...useTrainerState(),
    ...useTrainerActionState(),
  };
};

export { UseTrainers };

const TrainerProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = Trainereducer(TrainerReducer, INITIAL_STATE);

  const getTrainers = async () => {
    dispatch(getTrainersPending());
    const endpoint = `https://api.jsonbin.io/v3/b/67c8c259acd3cb34a8f5a0d0`;
    await axios(endpoint)
    .then((response) => {
      //  // eslint-disable-next-line no-debugger
      //  debugger;
        const record=response.data["record"];
        dispatch(getTrainersSuccess(record));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getTrainersError());
      });
  };

  const getTrainer = async (id: string) => {
  };

  const createTrainer = async (Trainer: ITrainer) => {};
  const deleteTrainer = async (id: string) => {};
  const updateTrainer = async (Trainer: ITrainer) => {};

  return (
    <div>
      <TrainerStateContext.Provider value={state}>
        <TrainerActionContext.Provider
          value={{ getTrainers, getTrainer, createTrainer, updateTrainer, deleteTrainer }}
        >
          {children}
        </TrainerActionContext.Provider>
      </TrainerStateContext.Provider>
    </div>
  );
};
export default TrainerProvider;
