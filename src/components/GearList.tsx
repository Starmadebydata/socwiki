import Link from "next/link";
import type { GearItem } from "@/types/character";
import { gearPath } from "@/data/gear";
import { getCharactersUsingGear } from "@/data/characters";

export function GearList({ items, title }: { items: GearItem[]; title: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Database entries with reverse links to characters that list each piece
        in Quick Build. Open a row for effect notes and Best on lists.
      </p>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-card text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Rarity</th>
              <th className="px-4 py-3 font-medium">Best on (sample)</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const users = getCharactersUsingGear(item.slug).slice(0, 4);
              return (
                <tr
                  key={item.slug}
                  className="border-t border-border hover:bg-card/60"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={gearPath(item)}
                      className="font-medium text-link hover:underline"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted">{item.rarity}</td>
                  <td className="px-4 py-3 text-muted">
                    {users.length
                      ? users.map((u) => u.name).join(", ")
                      : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
