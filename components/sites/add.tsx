import { useSiteStore } from "@/store/sites";
import { generateUUID } from "@/utils";
import { useForm } from "react-hook-form";

interface IForm {
  url: string;
}

export default function Controls() {
  const form = useForm<IForm>();
  const addSite = useSiteStore().addSite;

  function clearUrl(url: string) {
    const formedUrl = new URL(url);
    const canonicalUrl = `${formedUrl.protocol}//${formedUrl.hostname}`;
    return canonicalUrl;
  }

  async function tryWordpressMediaAPI(url: string) {
    try {
      const request = await fetch(`${url}/wp-json/wp/v2/media`);
      const response = await request.json();
      if (response.length === 0) {
        alert(
          `No media found at ${url}. Please make sure you have media enabled.`
        );
        return false;
      }
      return true;
    } catch (e) {
      console.error(`Error fetching media from ${url}:`, e);
      alert(
        `Error fetching media from ${url}. Please make sure you have the correct URL.`
      );
      return false;
    }
  }

  const onSubmit = async (data: IForm) => {
    if (data.url.startsWith("https://") || data.url.startsWith("http://")) {
      const saneUrl = clearUrl(data.url);
      const isValidSite = await tryWordpressMediaAPI(saneUrl);
      if (!isValidSite) {
        form.reset()
        return;
      }
      addSite({ id: generateUUID(), url: saneUrl });
      form.reset();
    } else {
      alert(`Invalid URL. Please enter a valid URL and try again.`);
      return form.reset();
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className=" border-b border-inherit flex items-center"
    >
      <input
        type="text"
        placeholder="http://example.com"
        className="bg-transparent flex-1 p-4 outline-none"
        {...form.register("url", { required: true })}
        autoFocus
      />
      <button
        className="p-6 text-xs font-semibold text-blue-500 border-l border-inherit disabled:text-zinc-600"
        disabled={form.formState.isSubmitting}
      >
        Add site
      </button>
    </form>
  );
}
