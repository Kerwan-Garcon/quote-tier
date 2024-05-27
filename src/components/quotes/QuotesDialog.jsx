import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddQuotesForm } from "./AddQuotesForm";

export default function QuotesDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute bottom-8 right-8" variant="outline">
          Ajouter une citation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajoute la citation</DialogTitle>
          <DialogDescription>Ajoute ta citation</DialogDescription>
        </DialogHeader>
        <AddQuotesForm />
      </DialogContent>
    </Dialog>
  );
}
