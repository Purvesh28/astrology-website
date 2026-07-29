export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center">
      <div className="animate-spin h-16 w-16 border-4 border-yellow-500 border-t-transparent rounded-full" />
    </div>
  );
}