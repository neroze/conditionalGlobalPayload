import { useEffect, useRef, useState } from "preact/hooks";
import { observer } from "mobx-react-lite";

import Form from "./poolMachine";
import Remote from "./utils/remote";
import PoolMachine from "./store/poolMachine";

import "./app.css";

// MST store
const PoolMachinestore = PoolMachine.create({});

// test Remote call
const RemoteCall1 = () => {
  return Remote.requests({ name: "niraj maharjan 101" });
};

// Dummy component to test rerender
const ComponentToRerender = observer(({ children }) => {
  return (
    <div>
      <h1>
        Component to rerender
        {PoolMachinestore.pool}
        {PoolMachinestore.machine}
      </h1>
      {children}
    </div>
  );
});

// Just another Dummy component to test rerender with useEffect hooks
const ComponentToRerender2 = observer(({ children }) => {
  const [error, setError] = useState("no error");

  useEffect(() => {
    Remote.requests({ name: "niraj" }).catch(() => {
      setError("Network error for Pool: " + PoolMachinestore.pool);
    });
  }, [PoolMachinestore.pool]);

  return (
    <div>
      <h1>Rerenders with {error}</h1>
      {children}
    </div>
  );
});

// Child component for nexted render test
const NextChildComponent = () => {
  useEffect(() => {
    console.log("--------- rendering nexted child ----------------");
    Remote.requests({ name: "nexted child component Rerender" });
  }, []);

  return <div>Nexted child component</div>;
};

export function App() {
  const formRef = useRef();

  const RemoteCall = () => {
    PoolMachinestore.set("pool", formRef.current.pool.value);
    PoolMachinestore.set("machine", formRef.current.machine.value);

    console.log(
      "-->> Deconrating request payload with pool id and machine id",
      PoolMachinestore.toJSON()
    );

    return Remote.decoratePayload({
      pool: formRef.current.pool.value,
      machine: formRef.current.machine.value,
    });
  };

  return (
    <>
      <Form formRef={formRef} handleSubmit={RemoteCall} />
      <br />
      <div className="flex">
        <div className="flex-item" style={{ backgroundColor: "red" }}>
          <ComponentToRerender>
            <NextChildComponent />
          </ComponentToRerender>
        </div>
        <div className="flex-item" style={{ backgroundColor: "green" }}>
          <ComponentToRerender2>
            <NextChildComponent />
          </ComponentToRerender2>
        </div>
      </div>
      <button style={{ color: "turquoise" }} onClick={RemoteCall1}>
        Request Test Remote call
      </button>
    </>
  );
}
