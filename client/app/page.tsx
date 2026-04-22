"use client";

import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState("both");

  return (
    <div className="flex h-screen w-screen flex-col bg-gradient-to-b from-[#0f0f1a] to-black text-white">
      <div className="bg-orange-500 py-2 text-center text-xs font-medium text-black">
        You are using an anonymous account
        <button className="ml-2 rounded-md bg-black px-2 py-1 text-xs text-white">
          Claim Account
        </button>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-xl">☰</span>
        <div className="flex gap-4 text-lg">
          <span>👤</span>
          <span>🔔</span>
          <span>💬</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.6)]">
          😺
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-wide">
          Chitchat<span className="text-pink-500">.gg</span>
        </h1>

        <div className="mt-3 flex gap-4 text-xl opacity-80">
          <span>📷</span>
          <span>✖️</span>
          <span>🎵</span>
        </div>
      </div>

      <div className="mt-6 px-4">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Your Interests (ON)</span>
          <span>Manage</span>
        </div>

        <div className="mt-3 rounded-xl border border-dashed border-gray-700 p-4 text-sm text-gray-400">
          <div className="mb-2 flex gap-2">
            <span className="rounded-full bg-gray-700 px-3 py-1">Reading</span>
            <span className="rounded-full bg-gray-700 px-3 py-1">Fitness</span>
            <span className="rounded-full bg-gray-700 px-3 py-1">Art</span>
          </div>
          You have no interests. Click to add some.
        </div>
      </div>

      <div className="mt-6 px-4">
        <h2 className="mb-3 text-sm text-gray-400">Gender Filter:</h2>

        <div className="flex gap-3">
          {["male", "both", "female"].map((value) => (
            <button
              key={value}
              onClick={() => setGender(value)}
              className={`flex-1 rounded-xl py-4 text-sm capitalize transition ${
                gender === value
                  ? "bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg"
                  : "bg-[#1a1a2e]"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto px-4 pb-6">
        <div className="flex gap-3">
          <button className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-400 to-pink-500 text-xl shadow-lg">
            🎥
          </button>

          <button className="h-16 flex-1 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-lg font-semibold shadow-lg">
            Start Text Chat
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-gray-500">
          Be respectful and follow our chat rules
        </p>
      </div>
    </div>
  );
}
