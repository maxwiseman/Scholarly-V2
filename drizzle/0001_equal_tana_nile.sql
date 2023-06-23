ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE text;
ALTER TABLE "users" ADD COLUMN "canvas_api_token" text;
ALTER TABLE "users" DROP COLUMN IF EXISTS "full_name";
ALTER TABLE "users" DROP COLUMN IF EXISTS "phone";