
New-Item -ItemType Directory -Force -Path .\pg-data

docker run -d -e POSTGRES_DB=taskdb -e POSTGRES_USER=taskuser -e POSTGRES_PASSWORD=Ta70sKPwd04 -p 5432:5432 -v ./pg-data:/var/lib/postgresql/data --name taskdb postgres:15

if (!(Test-Path ".\.env")) {
    New-Item -ItemType File -Path ".\.env" -Value "DATABASE_URL=postgres://taskuser:Ta70sKPwd04@localhost:5432/taskdb"
} else {
    $search = (Get-Content "./.env" | Select-String -Pattern "DATABASE_URL").Matches.Success
    if (!$search) {
        Add-Content -Path ".\.env" -Value "`nDATABASE_URL=postgres://taskuser:Ta70sKPwd04@localhost:5432/taskdb"
    }
}