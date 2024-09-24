import PageControls from "@/components/site/page/controls";
import MediaGrid from "@/components/site/media/grid";

export default function SitePage() {
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <div className="flex-1 overflow-auto">
        <MediaGrid />
      </div>
      <PageControls />
    </div>
  );
}
