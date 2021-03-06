import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { Request , Response } from 'express';
import { container } from 'tsyringe';

export default class UsersAvatarController {
  public async update(request: Request, response: Response): Promise<Response>{

    const UpdateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await UpdateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.json(userWithoutPassword);
  }
}
