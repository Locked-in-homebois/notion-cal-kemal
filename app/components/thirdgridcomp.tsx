import Image from "next/image";

export default function ThirdGridComp() {
  // Define the card style once here
  const cardStyle = "flex flex-col gap-3 rounded-xl bg-gray-100 p-6";
  const hStyle = "text-[18px] font-bold";

  return (
    <main className="flex justify-center py-10">
      <div className="grid w-full max-w-[1000px] gap-5 md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-6">
          <Image
            src="/cardone/cardone2icon.png"
            alt="icon1"
            width={40}
            height={40}
          />
          <h3 className={hStyle}>Connect multiple calendars</h3>
          <p>Easily sync work and personal calendars.</p>
        </div>

        {/* Card 2 */}
        <div className={cardStyle}>
          <Image
            src="/cardthree/card3icon2.png"
            alt="card1icon2"
            width={40}
            height={40}
          />
          <h3 className={hStyle}>No more double bookings</h3>
          <p>Auto-block busy slots across all your calendars.</p>
        </div>

        {/* Card 3 */}
        <div className={cardStyle}>
          <Image
            src="/cardthree/card3icon3.png"
            alt="card1icon2"
            width={40}
            height={40}
          />
          <h3 className={hStyle}>Easy-to-use mobile app</h3>
          <p>
            View your schedule at a glance and add events quickly with iOS and
            Android widgets.
          </p>
        </div>
      </div>
    </main>
  );
}
