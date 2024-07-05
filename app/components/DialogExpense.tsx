import React, { useState, useEffect } from "react";

interface DialogExpenseProps {
  addData: (desc: string, amount: number, useType: string) => void;
}

export default function DialogExpense({ addData }: DialogExpenseProps) {
  //! States
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const useType = "expense";

  const modalAddExpense = document.getElementById("modal_add_expense");

  useEffect(() => {
    if (modalAddExpense) {
      modalAddExpense.addEventListener("close", () => {
        setDesc("");
        setAmount(0);
      });
    }
  }, [modalAddExpense]);

  return (
    <>
      <dialog id="modal_add_expense" className="modal">
        <div className="modal-box">
          <div className="grid gap-4">
            <div className="flex justify-between text-warning">
              <h3 className="font-bold text-lg">Add Expense</h3>
              <svg viewBox="0 0 640 512" fill="currentColor" width="2rem">
                <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-174-.2c-13.3 0-24-10.7-24-24s10.7-24 24-24h174.1L535 41zM105 377l-23 23h174c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64h241.9c-3.7 7.2-5.9 15.3-5.9 24 0 28.7 23.3 52 52 52h117.4c-4 17 .6 35.5 13.8 48.8 20.3 20.3 53.2 20.3 73.5 0l19.3-19.3V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24 0-28.7-23.3-52-52-52H138.6c4-17-.6-35.5-13.8-48.8-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zm384 192c-35.3 0-64 28.7-64 64h64v-64zm-224 32c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96z" />
              </svg>
            </div>
            <div className="grid gap-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M14 3v4a1 1 0 001 1h4" />
                  <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 17h6M9 13h6" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Description"
                  value={desc ? desc : ""}
                  onChange={(e) => {
                    setDesc(e.target.value ? e.target.value : "");
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M5.71 6.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2 2a1 1 0 001.42 1.42l.29-.3V17a1 1 0 002 0V9.41l.29.3a1 1 0 001.42 0 1 1 0 000-1.42zM11 8h10a1 1 0 000-2H11a1 1 0 000 2zm10 8H11a1 1 0 000 2h10a1 1 0 000-2zm0-5H11a1 1 0 000 2h10a1 1 0 000-2z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Amount"
                  value={amount ? amount : 0}
                  onChange={(e) => {
                    setAmount(parseInt(e.target.value ? e.target.value : ""));
                  }}
                />
              </label>
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={() => {
                addData(desc, amount, useType);
                setDesc("");
                setAmount(0);

                if (modalAddExpense) {
                  (modalAddExpense as HTMLDialogElement).close();
                }
              }}
              className={`btn ${
                desc && amount > 0 ? "btn-warning" : "btn-disabled"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={5} y1={12} x2={19} y2={12} />
                <line x1={15} y1={16} x2={19} y2={12} />
                <line x1={15} y1={8} x2={19} y2={12} />
              </svg>
              Add Expense
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
