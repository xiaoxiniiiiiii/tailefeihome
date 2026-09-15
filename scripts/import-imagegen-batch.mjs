import path from 'node:path'
import sharp from 'sharp'

const projectDir = path.resolve('public/products')
const batch = [
  ['01', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-281a24a1-619f-49e2-a1fd-4881d55f0794.png'],
  ['02', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-31f02266-078f-42c3-ab93-cc823659a8ed.png'],
  ['03', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-0c883a0a-b564-412d-93a9-047e41cb18fc.png'],
  ['04', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-772da9aa-4096-4fee-94f6-4501f3db40d9.png'],
  ['05', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-f462cfd1-3b40-4bf2-8615-e00fe7e72e9d.png']
  ,['06', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-f2fbffc7-b619-4149-ada1-8ee8bf1fbb01.png']
  ,['07', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-6ada6fa2-727f-43e5-8a0e-f464b647b4d9.png']
  ,['08', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-fe207623-86af-48b6-a32c-4334d6e2387c.png']
  ,['09', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-e90da7b2-48f4-4f52-94ab-6b4be213aa16.png']
  ,['10', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-0697827d-cc0b-4114-b4d5-f9c5182fb4df.png']
  ,['11', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-e33e945e-0eb6-4502-af2e-8e6b0c62ccae.png']
  ,['12', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-224eb0a3-1cb9-45e1-876d-be5edbb37a51.png']
  ,['13', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-4c4e93ed-6936-4f72-9704-01f17e918688.png']
  ,['14', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-15480bc5-083b-4c6f-aea3-1bed594d32a5.png']
  ,['15', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-d1481df9-9bb2-4c68-a9c5-f5a79e586796.png']
  ,['16', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-8fb198c5-7654-470b-a589-05510ebe137d.png']
  ,['17', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-068ad3c9-c900-4882-b9cc-320693b066e4.png']
  ,['18', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-fb3c76e6-b680-4102-b352-162c5a065438.png']
  ,['19', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-f8dc2167-a237-4073-9329-4848e77de63a.png']
  ,['20', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-1c492b96-121e-48a0-bba5-b7f2ec4562d0.png']
  ,['21', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-97e62fb3-73cd-476b-8448-56fec712c475.png']
  ,['22', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-617ffcfa-3dd0-48cb-b894-6ecad11076fb.png']
  ,['23', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-d1a166f8-f640-415e-96bb-7ce357acd1f5.png']
  ,['24', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-6b988829-117e-4983-9893-9d17976fc258.png']
  ,['25', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-1d2ebb29-a774-41a7-b6ba-c425e5f55092.png']
  ,['26', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-ea0a5a8e-198c-4a8e-9690-6e321bc10ec7.png']
  ,['27', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-f525f9d5-9039-41d2-918f-6ddf44ea28c4.png']
  ,['28', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-14c24a23-14be-4f2e-b6e7-896b661d3037.png']
  ,['29', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-15ce9962-de26-40f3-950a-79956ec3af34.png']
  ,['30', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-ad946bc7-013b-4381-9267-3cdfbc0a859b.png']
  ,['31', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-82b93af9-19df-4abc-8b3e-874272d70a72.png']
  ,['32', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-e1e5ef06-8d7b-4c30-a179-d4065b2ee60c.png']
  ,['33', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-3251c0a9-214d-4cba-b496-c7977551fdb4.png']
  ,['34', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-1d649e8b-9b65-4636-9db0-bb7b2c2f97b1.png']
  ,['35', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-a1056f64-d62f-4189-b830-65312b17dd0d.png']
  ,['36', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-35841369-a7c3-4a8f-9c1d-dfc0ba3da418.png']
  ,['37', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-e670e636-caef-412d-bb32-0e04d846821a.png']
  ,['38', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-07549176-71b4-4b93-b1ff-bed623e3a7c6.png']
  ,['39', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-27b573ef-4d7f-49c5-be2d-1fce585b12f7.png']
  ,['40', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-20288f90-b741-4560-98fc-dd9a21ef63b6.png']
  ,['41', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-73df1bb4-9274-4fd2-9a32-36372ad69f70.png']
  ,['42', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-fe85dddc-5db0-4675-a97c-37230d5dc7d0.png']
  ,['43', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-38123f94-3950-41d3-bd43-a4f9cdda6da7.png']
  ,['44', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-a5a34863-be77-40ec-af14-db3a568411e7.png']
  ,['45', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-5741d711-e809-441c-be9e-4badd5f6a776.png']
  ,['46', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-1809870f-cfb1-402e-8973-c989ee813df1.png']
  ,['47', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-c4f85dee-006c-4de2-82a4-968720b1d285.png']
  ,['48', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-4565fc3a-d1c1-4112-8025-16d092d4e8dd.png']
  ,['49', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-4691505a-7d0f-473b-a30d-3d7256b8a801.png']
  ,['50', 'C:/Users/Administrator/.codex/generated_images/01a0a2ef-e012-7820-906f-d85e6fff4ad3/exec-02681733-4f2a-4780-9d5c-a3da136b8ca5.png']
]
for (const [id, source] of batch) {
  await sharp(source).resize(900, 900, { fit: 'cover' }).webp({ quality: 90 }).toFile(path.join(projectDir, `product-${id}.webp`))
}
console.log(`Imported ${batch.length} ImageGen assets.`)
