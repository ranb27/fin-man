import React, { useEffect, useState } from "react";

export default function DialogIncome({ addData }) {
  //! States
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const useType = "income";

  return (
    <>
      <dialog id="modal_add_income" className="modal">
        <div className="modal-box">
          <div className="grid gap-4">
            <div className="flex justify-between text-success">
              <h3 className="font-bold text-lg">Add Income</h3>
              <svg viewBox="0 0 512 512" fill="currentColor" width="2rem">
                <path d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1l-91.2 78.2c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c8.8 0 16.8 3.6 22.6 9.3l.1.1zM0 304c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zm48 112v48h48c0-26.5-21.5-48-48-48zm48-112H48v48c26.5 0 48-21.5 48-48zm368 112c-26.5 0-48 21.5-48 48h48v-48zm-48-112c0 26.5 21.5 48 48 48v-48h-48zm-96 80c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z" />
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
                  onChange={(e) => {
                    setDesc(e.target.value);
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
                  onChange={(e) => {
                    setAmount(parseInt(e.target.value));
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

                const modalAddIncome =
                  document.getElementById("modal_add_income");
                if (modalAddIncome) {
                  (modalAddIncome as HTMLDialogElement).close();
                }
              }}
              className="btn btn-success"
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
                <line x1={12} y1={5} x2={12} y2={19} />
              </svg>
              Add Income
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
