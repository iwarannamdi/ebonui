"use client";

export default function DashboardEditorSection() {
  return (
    <section className="w-full py-20 bg-[#0d0d0d] text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* HEADLINE */}
        <h1 className="text-3xl md:text-4xl font-semibold">
          Stay productive and manage your app
        </h1>
        <p className="text-white/60 text-lg mt-1">
          without leaving the dashboard
        </p>

        {/* TABS */}
        <div className="flex gap-4 mt-8">
          <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
            Table Editor
          </button>
          <button className="px-5 py-2 rounded-full bg-transparent border border-white/10 text-sm text-white/60 hover:text-white hover:bg-white/[0.05]">
            SQL Editor
          </button>
          <button className="px-5 py-2 rounded-full bg-transparent border border-white/10 text-sm text-white/60 hover:text-white hover:bg-white/[0.05]">
            RLS Policies
          </button>
        </div>

        {/* FEATURES ROW */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-white/60 text-sm">
          <span>✓ Full CRUD</span>
          <span>✓ Materialized Views</span>
          <span>✓ Foreign Tables</span>
          <span>✓ Partitioned Tables</span>
          <span>✓ Easy as a spreadsheet</span>
        </div>
      </div>

      {/* EDITOR MOCKUP CARD */}
      <div className="max-w-5xl mx-auto mt-14">
        <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-8 shadow-xl">
          {/* Create table header */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <span className="text-white/70">Create a new table under</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white text-xs">
              public
            </span>
          </div>

          {/* NAME FIELD */}
          <div className="mb-6">
            <label className="text-white/70 text-sm mb-2 block">Name</label>
            <input
              type="text"
              className="w-full bg-black/20 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none"
            />
          </div>

          {/* DESCRIPTION FIELD */}
          <div className="mb-6">
            <label className="text-white/70 text-sm mb-2 block">
              Description
            </label>
            <input
              type="text"
              placeholder="Optional"
              className="w-full bg-black/20 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none"
            />
          </div>

          {/* RLS TOGGLE SECTION */}
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-green-500"></div>
                <span className="text-sm text-white/90">
                  Enable Row Level Security (RLS)
                </span>
              </div>

              <span className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/60">
                Recommended
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed">
              Restrict access to your table by enabling RLS and writing
              Postgres policies.
            </p>

            {/* POLICY WARNING BOX */}
            <div className="rounded-lg bg-white/5 border border-white/10 p-4 mt-4">
              <p className="text-sm text-white/80 mb-2">
                Policies are required to query data
              </p>
              <p className="text-white/60 text-sm mb-4">
                You need to create an access policy before you can query data
                from this table. Without a policy, querying will return an empty
                array of results.
              </p>

              <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-sm text-white/70 hover:bg-white/[0.15]">
                RLS Documentation
              </button>
            </div>
          </div>

          {/* REALTIME TOGGLE (Mock Placeholder) */}
          <div className="mt-6 opacity-40">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-white/10 border border-white/20"></div>
              <span className="text-sm text-white/70">Enable Realtime</span>
            </div>
            <p className="text-white/50 text-sm pl-7">
              Broadcast changes on this table to authorized subscribers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
